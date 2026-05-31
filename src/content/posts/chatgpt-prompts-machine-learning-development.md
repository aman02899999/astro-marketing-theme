---
title: "ChatGPT Prompts for Machine Learning Developers: Build and Deploy AI Models"
description: "Expert ChatGPT prompts for ML developers. Implement algorithms, preprocess data, evaluate models, fine-tune LLMs, and deploy AI to production. Copy-paste ready."
pubDate: 2025-05-31
author: "AI Prompt Hub Team"
category: "coding-prompts"
tags: ["machine learning", "ai development", "chatgpt", "python", "pytorch", "scikit-learn", "llm"]
draft: false
image:
  path: /images/blog/default.jpg
  alt: AI Prompt Hub article
pin: false
---

Machine learning practitioners use AI to write the boilerplate so they can focus on the modeling decisions that actually matter. These prompts cover the full ML workflow — from data preprocessing to model deployment.

## Data Preparation Prompts

### Prompt 1: Data Preprocessing Pipeline

```
Write a data preprocessing pipeline for:

Task: [classification / regression / clustering / NLP / computer vision]
Data description: [describe your dataset — shape, types, quality issues]
Target variable: [what you're predicting — or "unsupervised"]
Library preference: [pandas + scikit-learn / polars / spark]

Pipeline must handle:
1. Missing values: [describe your missing data pattern]
   - Strategy: [imputation method or flag-and-impute]
2. Categorical encoding: [ordinal / one-hot / target encoding / embeddings]
3. Numerical scaling: [StandardScaler / MinMax / RobustScaler — with reason]
4. Outlier handling: [clip / log transform / flag / IQR removal]
5. Class imbalance: [SMOTE / class weights / under-sampling — if classification]
6. Train/val/test split strategy: [random / stratified / time-based]

Output: sklearn Pipeline or equivalent, with clear comments explaining each choice.
Include: a quick EDA section that prints key statistics before the pipeline.
```

---

### Prompt 2: Feature Engineering Guide

```
Suggest feature engineering ideas for:

Problem: [prediction task]
Raw features I have: [list your columns and types]
Domain knowledge: [what you know about this problem]
Current model performance: [baseline metric]

Generate:
1. Interaction features (pairs of features that might have combined predictive power)
2. Temporal features (if date/time data is present — day of week, lag features, rolling windows)
3. Aggregation features (group-by statistics — mean/std/count per category)
4. Text features (if text is present — TF-IDF, embedding suggestions)
5. Domain-specific transformations (log transforms, ratios, bucketing ideas)

For each suggested feature:
- How to create it (code snippet)
- Why it might help (intuition)
- How to validate if it actually helps (importance score / correlation check)
```

---

## Model Development Prompts

### Prompt 3: Model Selection Framework

```
Help me choose the right model for:

Task: [classification / regression / clustering / ranking / anomaly detection]
Dataset size: [X rows × Y features]
Training time constraint: [must train in under X minutes / hours]
Inference speed: [real-time / batch / no constraint]
Interpretability requirement: [black box OK / must explain predictions]
Baseline I have: [current model and metric]
Compute available: [CPU only / GPU / cloud]

Evaluate these model families for my problem:
1. Linear models (Logistic/Linear Regression, Lasso, Ridge)
2. Tree-based (Random Forest, Gradient Boosting: XGBoost, LightGBM, CatBoost)
3. Neural networks (MLP, CNN, RNN — if applicable)
4. Ensemble approaches

For each: pros/cons for my specific constraints.
Recommend: starting model + what to try if it underperforms.
```

---

### Prompt 4: LLM Fine-Tuning Setup

```
Set up a fine-tuning pipeline for:

Base model: [GPT-2 / Llama 3 / Mistral / Phi-3 / other HuggingFace model]
Task: [text classification / summarization / instruction following / domain adaptation]
Dataset: [describe your training data format and size]
Hardware: [GPU type and VRAM / Google Colab / local machine]
Library: [Hugging Face Transformers + PEFT/LoRA / Unsloth / Axolotl]

Pipeline:
1. Dataset preparation (format for the model — instruction template if chat model)
2. Model loading with quantization (4-bit / 8-bit if memory constrained)
3. LoRA configuration (rank, alpha, target modules for this architecture)
4. Training arguments (batch size, learning rate, epochs — with rationale)
5. Evaluation during training
6. Saving and loading the fine-tuned adapter
7. Inference example

Include: estimated training time and GPU memory requirements.
```

---

## Model Evaluation Prompts

### Prompt 5: Model Evaluation Framework

```
Build a comprehensive model evaluation framework for:

Task type: [binary classification / multi-class / regression / ranking]
Business context: [what this model will be used for]
Key metric for this business: [what matters most — precision / recall / AUC / RMSE / etc.]
Class balance: [balanced / imbalanced — ratio if known]
Threshold sensitivity: [false positives vs false negatives cost]

Generate:
1. Primary metrics to report (with business justification for each)
2. Diagnostic plots to create (ROC / PR curve / confusion matrix / calibration / residuals)
3. Slice analysis (how to check for performance disparities across subgroups)
4. Baseline comparisons (random / majority class / simple heuristic)
5. Statistical significance tests for comparing models
6. Production readiness checklist (what to verify before deploying)
7. Monitoring plan (what to track post-deployment)
```

---

## Deployment Prompts

### Prompt 6: ML Model API Wrapper

```
Wrap this ML model in a production-ready API:

Model: [type and framework — sklearn pipeline / PyTorch model / HuggingFace model]
Input: [what the API receives — JSON format, field names and types]
Output: [prediction format + confidence/probability if available]
Framework: [FastAPI / Flask / BentoML]
Deployment target: [Docker container / AWS Lambda / GCP Cloud Run]

Requirements:
1. Input validation (Pydantic models with field constraints)
2. Model loading at startup (not per-request)
3. Preprocessing aligned with training pipeline
4. Prediction + confidence output
5. Error handling (invalid input / model failure)
6. Health check endpoint
7. Logging (request / prediction / latency)
8. Dockerfile for containerization
9. Basic load test script

Output: production-ready code, not a tutorial.
```

---

## Frequently Asked Questions

### How reliable is ChatGPT for machine learning code?

Strong for standard sklearn, PyTorch boilerplate, and Hugging Face usage patterns. Less reliable for very recent library versions, cutting-edge architectures, and subtle numerical issues in ML math. Always test generated code on a small data subset before running on full data. The data preprocessing pipelines (Prompt 1) are especially reliable; the fine-tuning setup (Prompt 4) requires more careful validation against current library docs.

### Can ChatGPT help with Kaggle competitions?

Yes, effectively. For feature engineering ideas (Prompt 2), model selection (Prompt 3), and evaluation setup (Prompt 5), it's excellent. For novel architectures or state-of-the-art techniques in a specific domain, you'll need to supplement with recent papers and competition notebooks. Use ChatGPT for the scaffolding and standard approaches; apply your domain knowledge for the competitive edge.

### How do I use ChatGPT to debug a model that's not learning?

Describe: model architecture, loss curve (is it decreasing at all?), learning rate, batch size, data statistics (mean/std of inputs and targets), and the first 5 predictions vs. ground truth. ChatGPT will systematically work through the most common causes: vanishing gradients, data leakage, improper normalization, learning rate too high/low, and class imbalance issues.

### What ML concepts does ChatGPT explain best?

Intuitive explanations of algorithms (what random forest is doing, why attention works), bias-variance tradeoff, feature selection rationale, and debugging guidance. Less reliable for: bleeding-edge research papers (may not have training data), very specific numerical proofs, and hardware-specific optimization (CUDA kernels, quantization math).

### Should I use ChatGPT for production ML systems?

Use it to generate the boilerplate and structure; apply rigorous testing and review before deploying. The highest-risk areas: data leakage in preprocessing (can invalidate your entire model without an obvious error), improper train/val/test split, and security issues in API wrappers (input validation, rate limiting). Have experienced ML engineers review ChatGPT-generated production code.
