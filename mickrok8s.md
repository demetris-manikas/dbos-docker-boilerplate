
cd ~/.kube
microk8s kubectl config view --raw > config

//expose dahsboard
microk8s kubectl port-forward -n kube-system service/kubernetes-dashboard 10443:443

