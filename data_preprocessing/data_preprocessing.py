import pandas as pd
from edgeml import edgeml
from mrmr import mrmr_classif
import os

def create_windows(datasets):
    standing_frame = pd.DataFrame()
    standing_frame['timestamp'] = 0
    standing_frame.set_index('timestamp', inplace=True)

    walking_frame = pd.DataFrame()
    walking_frame['timestamp'] = 0
    walking_frame.set_index('timestamp', inplace=True)

    running_frame = pd.DataFrame()
    running_frame['timestamp'] = 0
    running_frame.set_index('timestamp', inplace=True)

    for dataset in datasets:   #running, standing, walking dataset
        labels = dataset['labels']
        label_name = ''
        if labels != []:  #some data is unlabeled
            label_name = labels[0][0]['name']

        if label_name == 'standing':
            sensors = dataset['sensors']
            for sensor in sensors:  #different sensors such as x0,y0,...
                sensorName = sensor['name']
                data = sensor['data']
                for dataPoint in data: #each datapoint in sensor data
                    timestamp = dataPoint['timestamp']
                    dataPointValue = dataPoint['datapoint']
                    standing_frame.at[int(timestamp), sensorName] = dataPointValue
                    
        if label_name == 'walking':
            sensors = dataset['sensors']
            for sensor in sensors:
                sensorName = sensor['name']
                data = sensor['data']
                for dataPoint in data:
                    timestamp = dataPoint['timestamp']
                    dataPointValue = dataPoint['datapoint']
                    walking_frame.at[int(timestamp), sensorName] = dataPointValue
            
        if label_name == 'running':
            sensors = dataset['sensors']
            for sensor in sensors:
                sensorName = sensor['name']
                data = sensor['data']
                for dataPoint in data:
                    timestamp = dataPoint['timestamp']
                    dataPointValue = dataPoint['datapoint']
                    running_frame.at[int(timestamp), sensorName] = dataPointValue
    
    ## Calculate windows of standing data

    standing_frame.index = pd.to_datetime(standing_frame.index, unit='ms')
    standing_frame = standing_frame.sort_index()
    standing_frame['label'] = 0

    standing_frame['x0_std'] = standing_frame['x0'].rolling('2000ms').std()
    standing_frame['y0_std'] = standing_frame['y0'].rolling('2000ms').std()
    standing_frame['z0_std'] = standing_frame['z0'].rolling('2000ms').std()

    standing_frame['x_std'] = standing_frame['x'].rolling('2000ms').std()
    standing_frame['y_std'] = standing_frame['y'].rolling('2000ms').std()
    standing_frame['z_std'] = standing_frame['z'].rolling('2000ms').std()

    standing_frame['alpha_std'] = standing_frame['alpha'].rolling('2000ms').std()
    standing_frame['beta_std'] = standing_frame['beta'].rolling('2000ms').std()
    standing_frame['gamma_std'] = standing_frame['gamma'].rolling('2000ms').std()

    standing_frame['x0_mean'] = standing_frame['x0'].rolling('2000ms').mean()
    standing_frame['y0_mean'] = standing_frame['y0'].rolling('2000ms').mean()
    standing_frame['z0_mean'] = standing_frame['z0'].rolling('2000ms').mean()

    standing_frame['x_mean'] = standing_frame['x'].rolling('2000ms').mean()
    standing_frame['y_mean'] = standing_frame['y'].rolling('2000ms').mean()
    standing_frame['z_mean'] = standing_frame['z'].rolling('2000ms').mean()

    standing_frame['alpha_mean'] = standing_frame['alpha'].rolling('2000ms').mean()
    standing_frame['beta_mean'] = standing_frame['beta'].rolling('2000ms').mean()
    standing_frame['gamma_mean'] = standing_frame['gamma'].rolling('2000ms').mean()

    standing_frame['x0_min'] = standing_frame['x0'].rolling('2000ms').min()
    standing_frame['y0_min'] = standing_frame['y0'].rolling('2000ms').min()
    standing_frame['z0_min'] = standing_frame['z0'].rolling('2000ms').min()

    standing_frame['x_min'] = standing_frame['x'].rolling('2000ms').min()
    standing_frame['y_min'] = standing_frame['y'].rolling('2000ms').min()
    standing_frame['z_min'] = standing_frame['z'].rolling('2000ms').min()

    standing_frame['alpha_min'] = standing_frame['alpha'].rolling('2000ms').min()
    standing_frame['beta_min'] = standing_frame['beta'].rolling('2000ms').min()
    standing_frame['gamma_min'] = standing_frame['gamma'].rolling('2000ms').min()

    standing_frame['x0_max'] = standing_frame['x0'].rolling('2000ms').max()
    standing_frame['y0_max'] = standing_frame['y0'].rolling('2000ms').max()
    standing_frame['z0_max'] = standing_frame['z0'].rolling('2000ms').max()

    standing_frame['x_max'] = standing_frame['x'].rolling('2000ms').max()
    standing_frame['y_max'] = standing_frame['y'].rolling('2000ms').max()
    standing_frame['z_max'] = standing_frame['z'].rolling('2000ms').max()

    standing_frame['alpha_max'] = standing_frame['alpha'].rolling('2000ms').max()
    standing_frame['beta_max'] = standing_frame['beta'].rolling('2000ms').max()
    standing_frame['gamma_max'] = standing_frame['gamma'].rolling('2000ms').max()

    
    ## Calculate windows of walking data
    walking_frame.index = pd.to_datetime(walking_frame.index, unit='ms')
    walking_frame = walking_frame.sort_index()
    walking_frame['label'] = 1

    walking_frame['x0_std'] = walking_frame['x0'].rolling('2000ms').std()
    walking_frame['y0_std'] = walking_frame['y0'].rolling('2000ms').std()
    walking_frame['z0_std'] = walking_frame['z0'].rolling('2000ms').std()

    walking_frame['x_std'] = walking_frame['x'].rolling('2000ms').std()
    walking_frame['y_std'] = walking_frame['y'].rolling('2000ms').std()
    walking_frame['z_std'] = walking_frame['z'].rolling('2000ms').std()

    walking_frame['alpha_std'] = walking_frame['alpha'].rolling('2000ms').std()
    walking_frame['beta_std'] = walking_frame['beta'].rolling('2000ms').std()
    walking_frame['gamma_std'] = walking_frame['gamma'].rolling('2000ms').std()

    walking_frame['x0_mean'] = walking_frame['x0'].rolling('2000ms').mean()
    walking_frame['y0_mean'] = walking_frame['y0'].rolling('2000ms').mean()
    walking_frame['z0_mean'] = walking_frame['z0'].rolling('2000ms').mean()

    walking_frame['x_mean'] = walking_frame['x'].rolling('2000ms').mean()
    walking_frame['y_mean'] = walking_frame['y'].rolling('2000ms').mean()
    walking_frame['z_mean'] = walking_frame['z'].rolling('2000ms').mean()

    walking_frame['alpha_mean'] = walking_frame['alpha'].rolling('2000ms').mean()
    walking_frame['beta_mean'] = walking_frame['beta'].rolling('2000ms').mean()
    walking_frame['gamma_mean'] = walking_frame['gamma'].rolling('2000ms').mean()

    walking_frame['x0_min'] = walking_frame['x0'].rolling('2000ms').min()
    walking_frame['y0_min'] = walking_frame['y0'].rolling('2000ms').min()
    walking_frame['z0_min'] = walking_frame['z0'].rolling('2000ms').min()

    walking_frame['x_min'] = walking_frame['x'].rolling('2000ms').min()
    walking_frame['y_min'] = walking_frame['y'].rolling('2000ms').min()
    walking_frame['z_min'] = walking_frame['z'].rolling('2000ms').min()

    walking_frame['alpha_min'] = walking_frame['alpha'].rolling('2000ms').min()
    walking_frame['beta_min'] = walking_frame['beta'].rolling('2000ms').min()
    walking_frame['gamma_min'] = walking_frame['gamma'].rolling('2000ms').min()

    walking_frame['x0_max'] = walking_frame['x0'].rolling('2000ms').max()
    walking_frame['y0_max'] = walking_frame['y0'].rolling('2000ms').max()
    walking_frame['z0_max'] = walking_frame['z0'].rolling('2000ms').max()

    walking_frame['x_max'] = walking_frame['x'].rolling('2000ms').max()
    walking_frame['y_max'] = walking_frame['y'].rolling('2000ms').max()
    walking_frame['z_max'] = walking_frame['z'].rolling('2000ms').max()

    walking_frame['alpha_max'] = walking_frame['alpha'].rolling('2000ms').max()
    walking_frame['beta_max'] = walking_frame['beta'].rolling('2000ms').max()
    walking_frame['gamma_max'] = walking_frame['gamma'].rolling('2000ms').max()


    ## Calculate windows of running data
    running_frame.index = pd.to_datetime(running_frame.index, unit='ms')
    running_frame = running_frame.sort_index()
    running_frame['label'] = 2

    running_frame['x0_std'] = running_frame['x0'].rolling('2000ms').std()
    running_frame['y0_std'] = running_frame['y0'].rolling('2000ms').std()
    running_frame['z0_std'] = running_frame['z0'].rolling('2000ms').std()

    running_frame['x_std'] = running_frame['x'].rolling('2000ms').std()
    running_frame['y_std'] = running_frame['y'].rolling('2000ms').std()
    running_frame['z_std'] = running_frame['z'].rolling('2000ms').std()

    running_frame['alpha_std'] = running_frame['alpha'].rolling('2000ms').std()
    running_frame['beta_std'] = running_frame['beta'].rolling('2000ms').std()
    running_frame['gamma_std'] = running_frame['gamma'].rolling('2000ms').std()

    running_frame['x0_mean'] = running_frame['x0'].rolling('2000ms').mean()
    running_frame['y0_mean'] = running_frame['y0'].rolling('2000ms').mean()
    running_frame['z0_mean'] = running_frame['z0'].rolling('2000ms').mean()

    running_frame['x_mean'] = running_frame['x'].rolling('2000ms').mean()
    running_frame['y_mean'] = running_frame['y'].rolling('2000ms').mean()
    running_frame['z_mean'] = running_frame['z'].rolling('2000ms').mean()

    running_frame['alpha_mean'] = running_frame['alpha'].rolling('2000ms').mean()
    running_frame['beta_mean'] = running_frame['beta'].rolling('2000ms').mean()
    running_frame['gamma_mean'] = running_frame['gamma'].rolling('2000ms').mean()

    running_frame['x0_min'] = running_frame['x0'].rolling('2000ms').min()
    running_frame['y0_min'] = running_frame['y0'].rolling('2000ms').min()
    running_frame['z0_min'] = running_frame['z0'].rolling('2000ms').min()

    running_frame['x_min'] = running_frame['x'].rolling('2000ms').min()
    running_frame['y_min'] = running_frame['y'].rolling('2000ms').min()
    running_frame['z_min'] = running_frame['z'].rolling('2000ms').min()

    running_frame['alpha_min'] = running_frame['alpha'].rolling('2000ms').min()
    running_frame['beta_min'] = running_frame['beta'].rolling('2000ms').min()
    running_frame['gamma_min'] = running_frame['gamma'].rolling('2000ms').min()

    running_frame['x0_max'] = running_frame['x0'].rolling('2000ms').max()
    running_frame['y0_max'] = running_frame['y0'].rolling('2000ms').max()
    running_frame['z0_max'] = running_frame['z0'].rolling('2000ms').max()

    running_frame['x_max'] = running_frame['x'].rolling('2000ms').max()
    running_frame['y_max'] = running_frame['y'].rolling('2000ms').max()
    running_frame['z_max'] = running_frame['z'].rolling('2000ms').max()

    running_frame['alpha_max'] = running_frame['alpha'].rolling('2000ms').max()
    running_frame['beta_max'] = running_frame['beta'].rolling('2000ms').max()
    running_frame['gamma_max'] = running_frame['gamma'].rolling('2000ms').max()
    

    df = pd.concat([standing_frame, walking_frame, running_frame, ], ignore_index=True)

    df.drop(['x0', 'y0', 'z0', 'x', 'y', 'z', 'alpha', 'beta', 'gamma'], inplace=True, axis=1)
    df['label'] = df['label'].astype('category')

    df.dropna(inplace=True)

    df_features = df.drop(columns=['label'])
    df_label = df['label'].to_frame()

    return df_features, df_label

def feature_selection(df_features, df_label):
    selected_features = mrmr_classif(X=df_features, y=df_label, K=10)

    print('The following features were selected: ', selected_features)

    df_selected_features = df_features[selected_features]

    return df_selected_features



if __name__ == '__main__':

    key =  "u3Uwyb3Ci/eDo95p8w1gH1naFyIMEgBO8EA23TpbYSD9ya76siL2AmKK9Y/7qtrLL+ABZiuYs/73UU0PwrQk2g=="
    remoteUrl = "https://app.edge-ml.org"
    project = edgeml.getProject(remoteUrl, key)
    datasets = project['datasets']

    df_features, df_label = create_windows(datasets)

    df_selected_features = feature_selection(df_features, df_label) 

    # df_selected_features.to_csv(os.path.join('..', 'data', 'features.csv'), index=False )
    # df_label.to_csv(os.path.join('..', 'data', 'label.csv'), index=False )



    