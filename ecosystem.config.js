module.exports = {
  apps: [
    {
      name: 'app-name',
      script: '/home/{USERNAME-HERE}/.bun/bin/bun run start',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: '{USERNAME-ON-REMOTE-SERVER}',
      host: '1.1.1.1',
      ref: 'origin/main',
      repo: '{SSH-REPO-ADDRESS}',
      path: '/home/{USERNAME-HERE}/apps/{FOLDER-FOR-THIS-APP}',
      'pre-deploy-local': '',
      'post-deploy':
        '. ~/.nvm/nvm.sh && /home/{USERNAME-HERE}/.bun/bin/bun install && /home/{USERNAME-HERE}/.bun/bin/bun run prisma-generate && /home/{USERNAME-HERE}/.bun/bin/bun run build && /home/{USERNAME-HERE}/.bun/bin/pm2 start ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
};

// NOTE Step 1, Add ssh-agent via:
//$ eval `ssh-agent -s`
//$ ssh-add

// NOTE Step 2, Deploy via:
// $ pm2 deploy production setup
// $ pm2 deploy production
