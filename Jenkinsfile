pipeline{
    agent any
    environment{
        PROJECT_ID = 'horizontal-ally-383421'
            CLUSTER_NAME = 'demo-gke'
            LOCATION = 'us-central1'
            CREDENTIALS_ID = 'gcr-admin-key'
    }
    stages {
        stage('build') {
            steps{
                // Connect to Git
                git 'https://github.com/syahidhzblh/berkelana.github.io.git'
                // Build Docker image from Dockerfile
                sh 'docker build -t gcr.io/horizontal-ally-383421/berkelana:v1 .'
                // Removing image with tag <none>
                sh 'docker image prune -f'
            }
        }
        stage('authenticate'){
            steps{
                withCredentials([file(credentialsId:'gcr-admin-key', variable:'gcloud_creds')]){
                    sh '''
                     gcloud auth activate-service-account --key-file=$gcloud_creds
                     gcloud auth configure-docker --quiet
                    '''
                }   
            }
        }
        stage('push'){
            steps{
                sh 'docker push gcr.io/horizontal-ally-383421/berkelana:v1'
            }
        }
    }
}