import pandas as pd
import numpy as np
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import StratifiedKFold, train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, accuracy_score
from pathlib import Path
from bayes_opt import BayesianOptimization
from sklearn_porter import Porter


"""
Perform stratified kfold
:param clf: instance of classifier
:param X: features for classification
:param y: target (walking/running)
:param n_fold: number of folds
:return: mean accuracy of cv
"""


def stratified_kfold_score(clf, X, y, n_fold):
    X, y = X.values, y.values
    strat_kfold = StratifiedKFold(n_splits=n_fold, shuffle=True, random_state=1)
    accuracy_list = []

    for train_index, test_index in strat_kfold.split(X, y):
        x_train_fold, x_test_fold = X[train_index], X[test_index]
        y_train_fold, y_test_fold = y[train_index], y[test_index]
        clf.fit(x_train_fold, y_train_fold)
        preds = clf.predict(x_test_fold)
        accuracy_test = accuracy_score(preds, y_test_fold)
        accuracy_list.append(accuracy_test)

    return np.array(accuracy_list).mean()


"""
Function for bayesian optimization. Takes the parameters and returns evaluation of them
:param max_samples: number of samples to draw for each estimator
:param n_estimators: number of trees in random forest
:param max_features: fraction of features to use for each estimator
:return: mean accuracy of cv
"""


def bo_params_rf(max_samples, n_estimators, max_features):
    params = {
        'max_samples': max_samples,
        'max_features': max_features,
        'n_estimators': int(n_estimators)
    }
    clf = RandomForestClassifier(max_samples=params['max_samples'], max_features=params['max_features'],
                                 n_estimators=params['n_estimators'])
    score = stratified_kfold_score(clf, X_train, y_train, 5)
    return score


# Read training data
X = pd.read_csv('features.csv')

y = pd.read_csv('label.csv')

# Train-Test splitting
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

# Create BO-Object with parameter ranges to use
rf_bo = BayesianOptimization(bo_params_rf, {
    'max_samples': (0, 1),
    'max_features': (0, 1),
    'n_estimators': (5, 20)
})

# Perform BO
results = rf_bo.maximize(n_iter=20, init_points=5, acq='ei')

# Get best params
params = rf_bo.max['params']
params['n_estimators'] = int(params['n_estimators'])

# Create final Random Forest Classifier with best params
rf_v1 = RandomForestClassifier(max_samples=params['max_samples'], max_features=params['max_features'],
                               n_estimators=params['n_estimators'])
rf_v1.fit(X_train, y_train)

# Predict on holdout and print metrics
preds = rf_v1.predict(X_test)
# print("Precision:{}".format(precision_score(preds, y_test)))
# print("Recall:{}".format(recall_score(preds, y_test)))
# print("F1 Score:{}".format((f1_score(preds, y_test))))

print("Accuracy:{}".format((accuracy_score(preds, y_test))))

# Create javascript of Random Forest Classifier
porter = Porter(rf_v1, language='js')
output = porter.export(embed_data=True)
print(output)
