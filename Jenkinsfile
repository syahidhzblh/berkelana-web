pipeline{
    agent any
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
        stage('push'){
            environment{
                GOOGLE_CREDENTIALS = credentials('gcr-admin-key')
                GOOGLE_EMAIL = 'jenkins-gcr-admin@horizontal-ally-383421.iam.gserviceaccount.com'
            }
            steps{
                // Authenticate Docker to GCR
                sh 'gcloud auth activate-service-account $GOOGLE_EMAIL --key-file="$GOOGLE_CREDENTIALS"'
                sh 'gcloud auth configure-docker --quiet'
                // Push Image to GCR
                sh 'docker push gcr.io/horizontal-ally-383421/berkelana:v1'   
            }
        }
    }
}