import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackButton, BackIcon } from './styles';

import LogoImg from '../../assets/logo.png'

type props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: props){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('groups');
  }
  
  return(
    <Container>
      {
        showBackButton &&
          <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>
      }
      <Logo source={LogoImg}/>
    </Container>
  )
}