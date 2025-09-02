pipeline {
  agent any

  tools {
    // Use the NodeJS version you configured in Manage Jenkins → Tools
    nodejs 'node24'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        // Equivalent of: npm ci
        bat 'npm ci'
      }
    }

    stage('Build React App') {
      steps {
        // Equivalent of: npm run build
        bat 'npm run build'
      }
    }

    stage('Archive Build Artifacts') {
      steps {
        // Save build files from dist/ so you can download them from Jenkins
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }
  }

  post {
    always {
      echo '✅ Pipeline finished (Windows)'
    }
  }
}
