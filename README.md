Atividade avaliativa 1

Projeto criado usando EXPO com template Typescript Blank.

Código organizado seguindo padrão proposto no módulo 2.
Para a implementação do componente ImageButton eu usei a documentação https://docs.expo.dev/tutorial/build-a-screen/ como exemplo, criei o button usando o Pressable recebendo o evento de onPress e com uma <Image /> recebendo o source para a uri da imagem,
dessa forma passando onPress e source como props.

Usei o secureTextEntry no TextInput password para não aparecer a senha durante a digitação.
Na tela 'sobre' usei o TouchableOpacity para criar um button com onPress para colocar o link do github usando o Linking.openURL("https://github.com/ane-k-goncalves") e também coloquei um icon do github.

Na tela 'listagem' eu usei SectionList para renderizar a lista, na qual eu implementei um helper para agrupar os passageiros pelo país, seguindo a regra da descrição: o passageiro aparece na lista de país de destino e de origem.


ActionSheets

No _layout eu usei ActionSheetProvider com o Stack dentro, nas Stack.Screen eu usei a headerLeft: () => false para que não seja possivel voltar de acordo com o "rascunho do cliente", no componente menu eu fiz a implementação showActionSheetWithOptions 
para as options 'sobre' e 'sair' usando switch case para redirecionar com "router.replace" para a tela desejada.
