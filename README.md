## Description

framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

---

#### Microservice Architecture Design in a NodeJS/NestJS Environment:

**Scenario:** You are tasked with designing a microservice architecture for an online retail system. This system should manage various aspects like product catalog, user accounts, orders, and payment processing.

![Alt text](image.png)

### **Microservices:**

#### 1\. **Product Catalog Service**

- **Database:** MongoDB or a similar NoSQL database for flexible schema and quick retrieval of product information.
- **Functionality:** Manages products, categories, inventory.

#### 2\. **User Account Service**

- **Database:** PostgreSQL or MySQL for relational data like user profiles, authentication, and authorization.
- **Functionality:** Handles user accounts, authentication, authorization, and user-related data.

#### 3\. **Order Service**

- **Database:** MongoDB or a SQL database, depending on the complexity of order-related data and need for transactional integrity.
- **Functionality:** Manages orders, handles order creation, updates, and status tracking.

#### 4\. **Payment Processing Service**

- **Database:** May not require a database if it primarily handles payment gateway integration. However, it might store transaction logs in a reliable storage like Elasticsearch.
- **Functionality:** Integrates with payment gateways, processes transactions, logs payment information.

### **Communication between Microservices:**

1. **RESTful APIs or GraphQL:** Each microservice exposes an API for interaction. NestJS provides excellent tools for building RESTful APIs or GraphQL endpoints, ensuring standardized communication.
2. **Message Broker (Optional):** Implement a message broker like RabbitMQ or Kafka for asynchronous communication between services. This ensures loose coupling and better scalability.

### **Security:**

1. **JWT Tokens:** Implement JWT (JSON Web Tokens) for authentication and authorization across services. NestJS provides robust authentication mechanisms.
2. **HTTPS:** Ensure secure communication between microservices using HTTPS to prevent data breaches.
