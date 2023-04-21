pipeline{
    agent any
    environment{
        PROJECT_ID = 'horizontal-ally-383421'
            CLUSTER_NAME = 'demo-gke'
            LOCATION = 'us-central1'
            CREDENTIALS_ID = 'gcr-admin-key'
    }
    stages {
        stage('Build') {
            steps{
                // Connect to Git
                git 'https://github.com/syahidhzblh/berkelana.github.io.git'
                // Build Docker image from Dockerfile
                sh 'docker build -t gcr.io/horizontal-ally-383421/berkelana:${env.BUILD_ID} .'
                // Removing image with tag <none>
                sh 'docker image prune -f'
            }
        }
        stage('Authenticate'){
            steps{
                withCredentials([file(credentialsId:'gcr-admin-key', variable:'gcloud_creds')]){
                    sh '''
                     gcloud auth activate-service-account --key-file=$gcloud_creds
                     gcloud auth configure-docker --quiet
                    '''
                }   
            }
        }
        stage('Push'){
            steps{
                sh 'docker push gcr.io/horizontal-ally-383421/berkelana:${env.BUILD_ID}'
            }
        }
    }
}