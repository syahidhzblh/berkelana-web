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
                withCredentials([[
                    $class: 'GoogleRobotPrivateKeyBinding',
                    credentialsId: 'gcr-admin-key',
                    variable: 'GOOGLE_CREDENTIALS'
                ]])
                    // Authenticate Docker to GCR
                    sh 'gcloud auth activate-service-account --key-file=$GOOGLE_CREDENTIALS'
                    sh 'gcloud auth configure-docker --quiet'
                    // Push Image to GCR
                    sh 'docker push gcr.io/horizontal-ally-383421/berkelana:v1'   
            }
        }
    }
}