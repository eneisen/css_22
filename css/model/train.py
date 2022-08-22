import pandas as pd
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, recall_score, precision_score, f1_score, accuracy_score
from pathlib import Path
from bayes_opt import BayesianOptimization
from sklearn_porter import Porter
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier as RFC

from bayes_opt import BayesianOptimization
from bayes_opt.util import Colours

def rfc_cv(n_estimators, min_samples_split, max_features, data, targets):
    """Random Forest cross validation.
    This function will instantiate a random forest classifier with parameters
    n_estimators, min_samples_split, and max_features. Combined with data and
    targets this will in turn be used to perform cross validation. The result
    of cross validation is returned.
    The goal is to find combinations of n_estimators, min_samples_split, and
    max_features that maximizes accurcay.
    """
    estimator = RFC(
        n_estimators=n_estimators,
        min_samples_split=min_samples_split,
        max_features=max_features,
        random_state=42
    )
    cval = cross_val_score(estimator, data, targets,
                           scoring='accuracy',
                            cv=2)
    return cval.mean()

def optimize_rfc(data, targets):
    """Apply Bayesian Optimization to Random Forest parameters."""
    def rfc_crossval(n_estimators, min_samples_split, max_features):
        """Wrapper of RandomForest cross validation.
        """
        return rfc_cv(
            n_estimators=int(n_estimators),
            min_samples_split=int(min_samples_split),
            max_features=max(min(max_features, 0.999), 1e-3),
            data=data,
            targets=targets,
        )

    optimizer = BayesianOptimization(
        f=rfc_crossval,
        pbounds={
            "n_estimators": (10, 250),
            "min_samples_split": (2, 25),
            "max_features": (0.1, 0.999),
        },
        random_state=1234,
        verbose=2
    )
    optimizer.maximize(n_iter=10)

    print("Final result:", optimizer.max)

    return optimizer.max['params']
    

if __name__ == "__main__":

    features = pd.read_csv(os.path.join('..', 'data', 'features.csv'))
    label = pd.read_csv(os.path.join('..', 'data', 'label.csv'))

    # Train-Test split
    X_train, X_test, y_train, y_test = train_test_split(features, label, test_size=0.2, stratify=label, random_state=42)

    # Perform BO and return best params
    params = optimize_rfc(X_train, y_train)
    params['n_estimators'] = int(params['n_estimators'])
    params['min_samples_split'] = int(params['min_samples_split'])

    # Create final Random Forest Classifier with best params
    rf = RandomForestClassifier(n_estimators=params['n_estimators'], max_features=params['max_features'],
                                 min_samples_split=params['min_samples_split'])
    rf.fit(X_train, y_train)

    # Predict on holdout and print metrics
    preds = rf.predict(X_test)

    print("Precision:{}".format(precision_score(preds, y_test, average='weighted')))
    print("Recall:{}".format(recall_score(preds, y_test, average='weighted')))
    print("F1 Score:{}".format((f1_score(preds, y_test, average='weighted'))))

    print("Accuracy:{}".format((accuracy_score(preds, y_test))))

    # Create javascript of Random Forest Classifier
    porter = Porter(rf, language='js')
    output = porter.export(embed_data=True)
    print(output)
