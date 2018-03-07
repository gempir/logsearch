pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''yarn install
yarn build'''
      }
    }
    stage('Deploy') {
      steps {
        sh 'tar xvf build.tar.gz -C /home/gempir/logsearch'
      }
    }
    stage('Cleanup') {
      steps {
        cleanWs(cleanWhenSuccess: true, cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
      }
    }
  }
}