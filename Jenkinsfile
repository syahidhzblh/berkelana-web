pipeline{
    agent any
    stages {
        stage('Build') {
            steps{
                // Connect to Git
                git 'https://github.com/syahidhzblh/berkelana.github.io.git'
                // Build Docker image from Dockerfile
                sh 'sudo docker build -t 151231214213.dkr.ecr.ap-southeast-2.amazonaws.com/berkelana:latest .'
                // Removing image with tag <none>
                sh 'sudo docker image prune -f'
            }
        }
        stage('Push'){
            steps{
                sh '''
                sudo docker push 151231214213.dkr.ecr.ap-southeast-2.amazonaws.com/berkelana:latest
                '''
            }
        }
    }
}
