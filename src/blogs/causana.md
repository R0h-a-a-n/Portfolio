---
title: Causana – Temporal Causal Inference Explorer
summary: End-to-end causal analysis platform for discovering time-lagged relationships in multivariate time series data 
slug: causana-temporal-causal-inference-explorer
---

# Causana – Temporal Causal Inference Explorer

## Understanding Cause and Effect Across Time

Causana is an end-to-end platform designed to empower researchers and engineers in uncovering causal relationships within multivariate time series data. It addresses the fundamental question of "what causes what, and when," providing a structured approach to temporal causal inference.

## Overview

The platform facilitates comprehensive causal analysis by supporting several key functionalities:

  * **Dataset Ingestion:** Seamless uploading of `.csv` datasets, making it straightforward to bring your time series data into the system.
  * **Temporal Configuration:** Flexible configuration of time lags and sliding windows, crucial for identifying time-delayed causal effects.
  * **Granger Causality Evaluation:** Robust implementation of Granger causality, a widely recognized statistical hypothesis test for determining whether one time series is useful in forecasting another.
  * **Modular Microservices:** A REST-based architecture built on modular microservices, ensuring scalability, maintainability, and ease of integration.
  * **DAG Visualization:** Intuitive visualization of directed acyclic graphs (DAGs) representing causal relationships, complete with weights indicating the strength of the influence.

## Architectural Design

Causana employs a layered and modular architecture to handle the complexities of causal inference:

```plaintext
[ Spring Boot API Gateway ]
           |
           V
[ Go Job Runner ]  →  [ Python Causal Engine ]
                               |
                               V
                    [ Weighted DAG Output ]
```

The **Spring Boot API Gateway** serves as the primary entry point, handling request routing and orchestration. It funnels tasks to the **Go Job Runner**, which is optimized for concurrency and efficient job coordination. The Go Job Runner, in turn, dispatches causal analysis tasks to the **Python Causal Engine**. This engine, leveraging powerful statistical libraries, performs the core causal inference and subsequently outputs a **Weighted DAG**, representing the discovered relationships.

## Technologies Utilized

The platform's robust functionality is a testament to the strategic selection of modern technologies:

  * **FastAPI:** Powers the causal backend, chosen for its high performance and ease of use in building APIs with Python.
  * **Go:** Employed for job coordination and concurrency, leveraging its efficiency in handling parallel processes.
  * **Spring Boot:** Forms the backbone of the API Gateway, providing robust routing and orchestration capabilities.
  * **D3.js + React:** Collaboratively used for the interactive DAG rendering, offering a dynamic and insightful visualization experience for the end-user.

## Illustrative Code Snippet (Causal Engine)

The heart of the causal engine lies in its ability to perform statistical tests. A simplified representation of the Granger causality implementation is shown below:

```python
import statsmodels.tsa.stattools as st

result = st.grangercausalitytests(data[['X', 'Y']], maxlag=3, verbose=True)
```

This snippet demonstrates the application of `grangercausalitytests` from the `statsmodels` library, a foundational component in determining causal links between time series.

## Sample Output

The output of Causana's analysis is designed for clarity and actionable insights, presenting causal relationships in a tabular format:

| Cause | Effect | Lag | P-value | Strength |
| :---- | :----- | :-- | :------ | :------- |
| Temp  | Demand | 2   | 0.015   | Strong   |
| Price | Sales  | 1   | 0.042   | Medium   |

This concise table highlights the identified causal pairs, the time lag at which the influence is observed, the statistical significance (P-value), and an interpreted strength of the relationship.

## Key Highlights

Causana stands out due to several key design principles and features:

  * **Modular Architecture:** The system's modularity ensures that the underlying inference engine can be easily swapped or updated, allowing for future integration of new causal inference techniques.
  * **Tunable Parameters:** Researchers have fine-grained control over parameters such as lag and window size, enabling them to tailor the analysis to the specific characteristics of their data.
  * **ML Pipeline Compatibility:** The standardized output format is readily compatible with downstream machine learning pipelines, facilitating further analysis and model development.

## Future Directions

Causana is an evolving platform with a clear roadmap for enhancements:

  * Further refining the CSV ingestion process for even greater robustness.
  * Optimizing the Granger causality implementation for larger datasets.
  * Developing more sophisticated interactive features for the DAG visualization.
  * Integrating alternative causal inference backends, such as Transfer Entropy, to broaden the scope of analysis.
  * Publishing benchmark comparisons to rigorously validate the platform's performance against industry standards.

Causana aims to demystify complex temporal relationships, offering a powerful tool for anyone seeking to understand the intricate dance of cause and effect in time series data.