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
    stage('') {
      steps {
        cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
      }
    }
  }
}