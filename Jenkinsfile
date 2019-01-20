node{

     stage('Checkout'){
         checkout scm
    }

    stage ('Get Dependencies'){
        sh 'npm install'
    }
    stage('Build & Test') {        
        sh 'npm run-script build'                       
    }
    stage('Public') {
        sleep 2
    }
    stage('Deploy to Test') {
        withCredentials([usernamePassword(credentialsId: 'pcf-pcfone', passwordVariable: 'CF_PASSWORD', usernameVariable: 'CF_USER')]) {
            sh 'cf login -a api.run.pcfone.io -u $CF_USER -p $CF_PASSWORD -s Testing'
            sh 'cf push travizza-test'
        }
    }

    stage('Deploy to Production') {
        withCredentials([usernamePassword(credentialsId: 'pcf-pcfone', passwordVariable: 'CF_PASSWORD', usernameVariable: 'CF_USER')]) {
            sh 'cf login -a api.run.pcfone.io -u $CF_USER -p $CF_PASSWORD -s Production'
            sh 'cf push travizza'
        }
    }
}
