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
                sh 'docker push gcr.io/horizontal-ally-383421/berkelana:v1'
            }
        }
    }
}