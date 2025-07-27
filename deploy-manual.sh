#!/bin/bash

# Manual deployment script for Google Cloud Run
# This script deploys with the correct memory and port settings

echo "🚀 Starting manual deployment to Google Cloud Run..."

# Set environment variables
export PROJECT_ID="tmmethode-portfolio"  # Replace with your actual project ID
export REGION="us-central1"
export SERVICE_NAME="tmmethode-portfolio"

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
  --set-env-vars=NODE_ENV=production,PORT=8080 \
  --set-env-vars=MONGODB_URI="$MONGODB_URI" \
  --set-env-vars=JWT_SECRET="$JWT_SECRET" \
  --set-env-vars=RATE_LIMIT_WINDOW_MS=900000 \
  --set-env-vars=RATE_LIMIT_MAX=100

echo "✅ Deployment complete!"
echo "🌐 Service URL: https://$SERVICE_NAME-$REGION-$PROJECT_ID.a.run.app" 