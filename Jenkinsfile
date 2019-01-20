node{

     stage('Checkout'){
         checkout scm
    }

    // stage('Build') {
    //     sh 'npm install'                       
    // }

    stage('Deploy') {
        withCredentials([usernamePassword(credentialsId: 'pcf-pcfone', passwordVariable: 'CF_PASSWORD', usernameVariable: 'CF_USER')]) {
            sh 'cf login -a api.run.pcfone.io -u $CF_USER -p $CF_PASSWORD -s Production'
            sh 'cf push travizza'
        }
    }
}
