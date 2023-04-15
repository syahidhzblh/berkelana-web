pipeline{
    agent any
    stages {
        stage('build') {
            steps{
                //git
                git 'https://github.com/syahidhzblh/berkelana.github.io.git'
                //build docker image
                sh 'docker build -t gcr.io/horizontal-ally-383421/berkelana:v1 .'
            }
        }
        stage('push'){
            environment{
                GOOGLE_CREDENTIALS = credentials('gcr-admin-key')
            }
            steps{
                // Authenticate Docker to GCR
                sh 'gcloud auth activate-service-account $GOOGLE_CREDENTIALS'
                sh 'gcloud auth configure-docker --quiet'
                // push image to GCR
                sh 'docker push gcr.io/horizontal-ally-383421/berkelana:v1'   
            }
        }
    }
}