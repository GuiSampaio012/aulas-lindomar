import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'
import Home from './pages/home'
import Login from './pages/login'
import Read from './pages/read'
import Delete from './pages/delete'
import Extrato from "./pages/extrato";
import Cadastro from './pages/cadastro';
import Transferencia from "./pages/transferencia";
import TranRealizada from "./pages/transferencia/tranRealizada";
import Cartao from './pages/cartao';
import TelaCartao from './pages/cartao/telaCartao';
import TelaEmprestimo from './pages/emprestimo/telaEmprestimo';
import Emprestimo from './pages/emprestimo';
import { useEffect } from 'react';

const Pilha = createNativeStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar(){

    return(
        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor:'#000',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor:'#3D8C64',
                tabBarInactiveTintColor: '#555',
            }}
        >
            <Nav.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="home" size={size} color={color}/>
                    ),
                    unmountOnBlur: true
                }}
            />

            <Nav.Screen name="Login" component={Login}
                options={{
                    // tabBarStyle: {display:'none'},
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />

            {/* <Nav.Screen name="Create" component={Create}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="plus-square" size={size} color={color}/>
                    )
                }}
            /> */}

            {/* <Nav.Screen name="Read" component={Read}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="list" size={size} color={color}/>
                    )
                }}
            />
            <Nav.Screen name="Delete" component={Delete}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="trash-2" size={size} color={color}/>
                    )
                }}
            /> */}

            
        </Nav.Navigator>
    )
}

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                {/* para deixar o login sem aparecer a navbar, deixar ele em primeiro */}
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login', headerShown: false }}
                />
                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: '', headerShown: false }}
                />
                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: 'Cadastro', headerShown: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home', headerShown: false, unmountOnBlur: true }}
                    
                    
                />
                <Pilha.Screen
                    name="Transferencia"
                    component={Transferencia}
                    options={{ title: 'Transferência', headerShown: false}}
                />
                <Pilha.Screen
                    name="Cartao"
                    component={Cartao}
                    options={{ title: 'Cartão de crédito', headerShown: false }}
                />
                <Pilha.Screen
                    name="TelaCartao"
                    component={TelaCartao}
                    options={{ title: 'Cartão de crédito', headerShown: false }}
                />
                <Pilha.Screen
                    name="Emprestimo"
                    component={Emprestimo}
                    options={{ title: 'Empréstimo', headerShown:false }}
                />
                <Pilha.Screen
                    name="TelaEmprestimo"
                    component={TelaEmprestimo}
                    options={{ title: 'Empréstimo Realizado', headerShown: false}}
                />
                <Pilha.Screen
                    name="TranRealizada"
                    component={TranRealizada}
                    options={{ title: 'Transferência Realizada', headerShown: false }}
                />
                <Pilha.Screen
                    name="Extrato"
                    component={Extrato}
                    options={{ title: 'Extrato', headerShown: false }} 
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}

