#!/bin/bash

# Force deployment script - completely replaces the service
# This will ensure the new memory and port settings are applied

echo "🔥 Force deploying to Google Cloud Run..."

# Set environment variables
export PROJECT_ID="tmmethode-portfolio"  # Replace with your actual project ID
export REGION="us-central1"
export SERVICE_NAME="tmmethode-portfolio"

# Delete the existing service first (if it exists)
echo "🗑️  Removing existing service..."
gcloud run services delete $SERVICE_NAME \
  --project=$PROJECT_ID \
  --region=$REGION \
  --quiet || echo "Service doesn't exist or already deleted"

# Wait a moment
sleep 5

# Deploy with correct settings
echo "🚀 Deploying new service with 1Gi memory..."
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

echo "✅ Force deployment complete!"
echo "🌐 Service URL: https://$SERVICE_NAME-$REGION-$PROJECT_ID.a.run.app" 