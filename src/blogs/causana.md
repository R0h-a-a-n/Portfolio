---
title: Causana – Temporal Causal Inference Explorer
summary: Built an end-to-end causal analysis platform for discovering time-lagged relationships in multivariate time series data using a modular backend and interactive frontend.
slug: causana-temporal-causal-inference-explorer
---

# 🔍 Causana – Temporal Causal Inference Explorer

> Understand **what causes what**, and when — across time.

---

## 🚀 Overview

Causana is an end-to-end platform that lets researchers and engineers **discover causal relationships** in multivariate time series data. It supports:

- ✅ Uploading `.csv` datasets
- ⏱ Lag configuration and sliding window inference
- 🔁 Granger causality evaluation
- 🌐 REST-based modular microservices
- 🧠 DAG visualization with weights

---

## 🏗️ Architecture

```plaintext
[ Spring Boot API Gateway ]
           |
           V
[ Go Job Runner ]  →  [ Python Causal Engine ]
                               |
                               V
                    [ Weighted DAG Output ]

```

## 🔧 Technologies Used
FastAPI for causal backend

Go for job coordination and concurrency

Spring Boot for routing and orchestration

D3.js + React for interactive DAG rendering

## 🧪 Sample Code (Causal Engine)
```python
import statsmodels.tsa.stattools as st

result = st.grangercausalitytests(data[['X', 'Y']], maxlag=3, verbose=True)
```
📊 Output Example
Cause	Effect	Lag	P-value	Strength
Temp	Demand	2	0.015	Strong
Price	Sales	1	0.042	Medium

---

## 📌 Highlights
🧩 Modular architecture (easy to swap inference engine)

⚡ Tunable parameters for lag, window size

🧪 Output format compatible with downstream ML pipelines

---

## ✅ Next Steps
 CSV ingestion

 Granger implementation

 Interactive DAG

 Add transfer entropy backend

 Publish benchmark comparison

