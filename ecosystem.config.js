module.exports = {
    apps: [{
      name: 'practice',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-52-15-70-108.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/r.pem',
        ref: 'origin/master',
        repo: 'https://github.com/reperez120/practice.git',
        path: '/home/ubuntu/practice',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }