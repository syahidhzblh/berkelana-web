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
            steps{
                // Authenticate Docker to GCR
                    //withCredentails([string(credentialID:'gcr-admin-key', value:'gcr-key')])

                    //sh 'gcloud auth activate-service-account --key-file=./key.json'
                    //sh 'gcloud auth configure-docker --quiet'

                    // Push Image to GCR
                    sh 'docker push gcr.io/horizontal-ally-383421/berkelana:v1'   
            }
        }
    }
}