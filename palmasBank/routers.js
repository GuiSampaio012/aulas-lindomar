import {NavigationContainer} from '@react-navigation/native';
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

            {/* <Nav.Screen name="Create" component={Create}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Feather name="plus-square" size={size} color={color}/>
                    )
                }}
            /> */}

            <Nav.Screen name="Read" component={Read}
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
            />

            
        </Nav.Navigator>
    )
}

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: '', headerShown: false }}
                />
                {/* para deixar o login sem aparecer a navbar, deixar ele em primeiro */}
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login', headerShown: false }}
                />
                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: 'Cadastro', headerShown: true }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home', headerShown: false }}
                />
                <Pilha.Screen
                    name="Transferencia"
                    component={Transferencia}
                    options={{ title: 'Transferência' }}
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
                    name="Financias"
                    component={Financias}
                    options={{ title: 'Financias' }}
                />*/}
                <Pilha.Screen
                    name="TranRealizada"
                    component={TranRealizada}
                    options={{ title: 'Transferência Realizada', headerShown: true }}
                />
                <Pilha.Screen
                    name="Extrato"
                    component={Extrato}
                    options={{ title: 'Extrato' }} 
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}

