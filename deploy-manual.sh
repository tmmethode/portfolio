#!/bin/bash

# Manual deployment script for Google Cloud Run
# This script deploys with the correct memory and port settings

echo "🚀 Starting manual deployment to Google Cloud Run..."

# Set environment variables
export PROJECT_ID="portfolio-1027061627518"  # Your actual project ID
export REGION="us-central1"
export SERVICE_NAME="portfolio"

# Deploy with correct settings
gcloud run deploy $SERVICE_NAME \
  --source . \
  --project=$PROJECT_ID \
  --region=$REGION \
  --platform=managed \
  --allow-unauthenticated \
  --memory=1Gi \
  --cpu=1 \
  --max-instances=10 \
  --port=8080 \
  --set-env-vars="NODE_ENV=production,PORT=8080,MONGODB_URI=$MONGODB_URI,JWT_SECRET=$JWT_SECRET,RATE_LIMIT_WINDOW_MS=900000,RATE_LIMIT_MAX=100"

echo "✅ Deployment complete!"
echo "🌐 Service URL: https://$SERVICE_NAME-$REGION-$PROJECT_ID.a.run.app" 