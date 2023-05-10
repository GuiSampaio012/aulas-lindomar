import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'
import Home from './pages/home'
import Login from './pages/login'
import Create from './pages/create'
import Read from './pages/read'
import Update from './pages/update'
import Delete from './pages/delete'
import Extrato from "./pages/extrato";
import Cadastro from "./pages/cadastro";

const Pilha = createStackNavigator()
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
                tabBarActiveTintColor:'#f0f',
                tabBarInactiveTintColor: '#555',
            }}
        >
            <Nav.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
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

            <Nav.Screen name="Create" component={Create}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="plus-square" size={size} color={color}/>
                    )
                }}
            />

            <Nav.Screen name="Read" component={Read}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="list" size={size} color={color}/>
                    )
                }}
            />

            <Nav.Screen name="Update" component={Update}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="edit" size={size} color={color}/>
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
            />

            
        </Nav.Navigator>
    )
}

export default function Routers({navigation}){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                        name="Login"
                        component={Login}
                        options={{ title: false, headerShown: false }}
                />     
                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: false, headerShown: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: false, headerShown: false }}
                />
                {/* <Pilha.Screen
                    name="Emprestimo"
                    component={Emprestimo}
                    options={{ title: 'Emprestimo'}}
                /> */}
                {/* <Pilha.Screen
                    name="Cartão de crédito"
                    component={Cartao}
                    options={{ title: 'Cartão de crédito' }}
                />
                <Pilha.Screen
                    name="Investimentos"
                    component={Investimentos}
                    options={{ title: 'Investimentos' }}
                />
                <Pilha.Screen
                    name="Seguros"
                    component={Seguros}
                    options={{ title: 'Seguros' }}
                />
                <Pilha.Screen
                    name="Financias"
                    component={Financias}
                    options={{ title: 'Financias' }}
                />
                <Pilha.Screen
                    name="Extrato"
                    component={Extrato}
                    options={{ title: 'Extrato' }}
                />
                <Pilha.Screen
                    name="Delete"
                    component={Delete}
                    options={{ title: 'Login Lindomar' }}
                /> */}
                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: false, headerShown: true }}
                />
                

            </Pilha.Navigator>
        </NavigationContainer>
    )
}
