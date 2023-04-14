pipeline{
    agent any
    environment{
        CLOUDSDK_CORE_PROJECT='horizontal-ally-383421'
        GCLOUD_CREDS=credentials('gcr-admin-key')
    }
    stages {
        stage('build') {
            steps{
                sh 'docker build -t gcr.io/horizontal-ally-383421/berkelana:v1 .'
            }
        }
        stage('push'){
            steps{
                withCredentials([file(credentialsId: 'gcr-admin-key', variable: 'GCLOUD_CREDS')]){
                sh '''
                    gcloud auth activate-service-account --key-file=${GCLOUD_CREDS}
                    docker push gcr.io/horizontal-ally-383421/berkelana:v1
                    '''
                }
            }
        }
    }
}