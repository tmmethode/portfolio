# Google Cloud Run Deployment Guide

This project is configured to deploy to Google Cloud Run using GitHub Actions.

## Prerequisites

1. **Google Cloud Project**: You need a Google Cloud Project with billing enabled
2. **Google Cloud APIs**: Enable the following APIs:
   - Cloud Run API
   - Cloud Build API
   - Container Registry API

## Setup Steps

### 1. Create a Service Account

```bash
# Create service account
gcloud iam service-accounts create github-actions \
  --display-name="GitHub Actions" \
  --description="Service account for GitHub Actions deployment"

# Grant necessary roles
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/storage.admin"

# Create and download the key
gcloud iam service-accounts keys create key.json \
  --iam-account=github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com
```

### 2. Set up GitHub Secrets

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add:

- `GCP_PROJECT_ID`: Your Google Cloud Project ID
- `GCP_SA_KEY`: The entire content of the `key.json` file (base64 encoded)
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure random string for JWT signing

### 3. Deploy

Simply push to the `main` branch and the GitHub Action will automatically deploy to Cloud Run!

## Environment Variables

The following environment variables are set in production:

- `NODE_ENV=production`
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: JWT signing secret
- `RATE_LIMIT_WINDOW_MS=900000` (15 minutes)
- `RATE_LIMIT_MAX=100` (100 requests per window)

## Service URL

After deployment, your app will be available at:
```
https://tmmethode-portfolio-us-central1-YOUR_PROJECT_ID.a.run.app
```

## Local Development

```bash
# Install dependencies
npm run install:all

# Start development servers
npm run dev

# Build for production
npm run build
```

## Troubleshooting

1. **Build fails**: Check that all dependencies are properly installed
2. **Deployment fails**: Verify your GitHub secrets are correctly set
3. **App doesn't work**: Check the Cloud Run logs in Google Cloud Console 