# How to run Kubernetes

## Setup

1. Install Kubernetes
2. Create Kubernetes `Namespace` (Optional)
3. Download [Istio](https://istio.io/latest/docs/setup/getting-started/)
4. Install Istio
5. Enable Istio sidecar for Kubernetes `Namespace`
6. Add Kubernetes hostname into `/etc/hosts`

```shell
kubectl apply -f ./kubernetes/namespace.yaml #2
istioctl install #4
kubectl label namespace %NAMESPACE% istio-injection=enabled #5
echo %IP_K8S% api.backend.com  >> /etc/hosts #6
```

## Deploy

### Deploy Application

#### gRPC-Server

```shell
kubectl apply -f ./kubernetes/grpc-server/service.yaml
kubectl apply -f ./kubernetes/grpc-server/deployment.yaml
```

#### gRPC-Client

```shell
kubectl apply -f ./kubernetes/grpc-client/service.yaml
kubectl apply -f ./kubernetes/grpc-client/deployment.yaml
```

### Deploy Istio Component

#### Gateway

```shell
kubectl apply -f ./kubernetes/istio-gateway.yaml
```

#### gRPC-Client Virtual Service

```shell
kubectl apply -f ./kubernetes/grpc-client/istio-virtualservice.yaml
```

#### Load Balancer (Optional)

```shell
kubectl apply -f ./kubernetes/istio-destination-rule.yaml
```

### Deploy Istio Addons

Available addons at [link](https://github.com/istio/istio/tree/master/samples/addons).

- Jaeger

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/jaeger.yaml
```

- Prometheus

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/prometheus.yaml
```

- Kiali

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/kiali.yaml
```

- Grafana

```shell
kubectl apply -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/grafana.yaml
```

### Uninstall Istio Addons

```shell
kubectl delete -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/jaeger.yaml
kubectl delete -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/prometheus.yaml
kubectl delete -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/kiali.yaml
kubectl delete -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/grafana.yaml
```

## Test

#### gRPC Client

```shell
curl --location --request GET 'http://api.backend.com/grpc-client/heroes/2'
```
#### Trace for Jaeger

```javascript
for (let i = 0; i < 100; i++) {
  fetch("http://api.backend.com/grpc-client/heroes/2", {
    method: 'GET',
    redirect: 'follow'
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
```
