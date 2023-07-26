pipeline{
    agent any
    stages {
        stage('Build') {
            steps{
                // Connect to Git
                git 'https://github.com/syahidhzblh/berkelana.github.io.git'
                // Build Docker image from Dockerfile
                sh 'docker build -t 151231214213.dkr.ecr.ap-southeast-2.amazonaws.com/berkelana:v1 .'
                // Removing image with tag <none>
                sh 'docker image prune -f'
            }
        }
        stage('Push'){
            steps{
                sh '''
                docker push 151231214213.dkr.ecr.ap-southeast-2.amazonaws.com/berkelana:v1
                '''
            }
        }
    }
}
