pipeline {
    agent none
    stages {
        stage ('Checkout'){
            agent any
                
            steps {
                checkout scm
                // git "https://github.com/yogendra/rapid-travel-client.git"        
                stash includes: '**', name: 'app'
            }
        }
        stage ('Build') {
            agent { 
                docker { image 'node:lts-alpine' }
            }
            steps { 
                unstash name: 'app'
                sh 'npm install'
                sh 'npm run-script build'
                stash includes: '**', name: 'app'
                
            }
        }
        stage ('Test and Deploy') {
            agent {
                docker { image 'smizy/cf-cli' }
                
            }
            steps {
                unstash name: 'app'
                sleep 2

                withCredentials([usernamePassword(credentialsId: 'pcf-pcfone', passwordVariable: 'CF_PASSWORD', usernameVariable: 'CF_USER')]) {
                    sh 'cf login -a api.run.pcfone.io -u $CF_USER -p $CF_PASSWORD -s Testing'
                    sh 'cf push -f manifest-pcfone-test.yml travizza-test'
                }

                withCredentials([usernamePassword(credentialsId: 'pcf-pcfone', passwordVariable: 'CF_PASSWORD', usernameVariable: 'CF_USER')]) {
                    sh 'cf login -a api.run.pcfone.io -u $CF_USER -p $CF_PASSWORD -s Production'
                    sh 'cf push -f manifest-pcfone.yml travizza'
                }
            }
        }
    }
}
