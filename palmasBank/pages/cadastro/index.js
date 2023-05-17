import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import Arvores from '../../assets/images-removebg-preview.png'
import { useNavigation } from '@react-navigation/native'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
// import { storage, db } from '../firebaseConfig'
// import { collection, addDoc } from 'firebase/firestore'

export default function Cadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [semiSenha, setSemiSenha] = useState('')

    const navigation = useNavigation()
   



    const [texto, setTexto] = useState()
    const [nome, setNome] = useState()
    const [progressPercent, setProgressoPercent] = useState(0)
    const [imgUrl, setImgUrl] = useState()
    const [image, setImage] = useState()
    const [preview, setPreView] = useState()
  


    const btCadastro = () => {
        if (semiSenha == password){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Create')
                {upload()}
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        }
        else{
            console.log('senha está incorreta')
            alert('senha incorreta')
        }
    }

    
    //######################## Imagem ############################
    // useEffect(() => {
    //   if (!image) {
    //     setPreView(undefined)
    //     return
    //   }
  
    //   const objectUrl = URL.createObjectURL(image)
    //   setPreView(objectUrl)
  
    //   return () => URL.revokeObjectURL(objectUrl)
    // }, [image])
  
    //######################## Fim Imagem ########################
  
    // async function adicionar(){
    //     await addDoc(collection(db, 'alunos'), {
    //       name: nome,
    //       email: email,
    //       status: false,
    //       image: nome.replace(/ +/g, '') + '_' + image.name
    //     })
    
    //     setEmail('')
    //     setNome('')
    //     setTexto('Cadastrado com Sucesso!')
    //     setPreView(undefined)
    // }


    // const upload = e => {
    //   e.preventDefault()
  
    //   const file = image
  
    //   if (!file) {
    //     console.log('Faltou imagem!')
    //     return
    //   }
  
    //   if (!nome) {
    //     console.log('Faltou nome!')
    //     return
    //   }
  
    //   if (!email) {
    //     console.log('Faltou e-mail!')
    //     return
    //   }
  
    //   if (image == null) return
  
    //   const storageRef = ref(
    //     storage,
    //     `images/${nome.replace(/ +/g, '') + '_' + image.name}`
    //   )
    //   const uploadTask = uploadBytesResumable(storageRef, file)
  
    //   uploadTask.on('state_changed', snapshot => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     )
    //     setTimeout(() => {
    //       setProgressoPercent(progress), 1000
    //     })
    //   })
    //   adicionar()
    // }
  


    return (
        <View style={styles.container}>

            <View style={styles.caixote}>
                {/* <View>
                    <img style={styles.img} src={Arvores}/>
                </View> */}

                {/* <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Nome'
                        keyboardType='text'
                    />
                </View> */}

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Nome'
                        value={nome}
                        onChangeText={(e) => {setNome(e)}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='email'
                        keyboardType='email'
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.entrada}
                        placeholder='Senha'
                        keyboardType='text'
                        value={semiSenha}
                        onChangeText={(e) => setSemiSenha(e)}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.entrada}
                        placeholder='Confirme a Senha'
                        keyboardType='text'
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                </View>

                <View style={styles.caixa}> 
                    <View style={styles.foto0}>
                        <img src={preview} style={styles.foto1} />
                    </View>

                    <View style={styles.entrada}>
                        <input
                            type='file'
                            onChange={e => {
                            setImage(e.target.files[0])
                            }}
                        />
                    </View>

                    <View>
                        <Text style={styles.sucesso}>{texto}</Text>
                    </View>
                </View>

                <View style={styles.caixa}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress = {() => btCadastro()}
                    >
                        <Text style={styles.texto}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>


                

                
           
                {/* <TouchableOpacity style={styles.btn} onPress={upload}>
                    <Text style={styles.texto}>Upload</Text>
                </TouchableOpacity> */}

            </View>



            {/* <View style={styles.container2}> */}

               

            {/* </View> */}

            

        </View>
    )
}