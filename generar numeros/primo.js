function esPrimo(n){
    //no tiene sentido enviar como parametros numeros menos que 1
    if (n<1) return false;
    //el 1 no hace falta dividirlo con nada
    if(n==1) return true;
    //para el resto de numeros, empezamos a dividir entre 2 y terminamos cuando la raiz cuadrada del contador supere al numero7
    for(let i=2; i*i<=n ; i++){
        //si el numero se puede dividir por el contador, no es primo
        if(n%i==0) return false;
    }
    //si hemos salido del bucle sin ejecutar un return, tenemos numero primo
    return true;
}