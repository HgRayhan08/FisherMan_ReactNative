import { Auth } from "../../Service/Auth";
import { Box, Button, Center, Heading, Input, Text, VStack } from "native-base";

import { Alert, View } from "react-native";
import React, { Component } from "react";
import { updatePassword } from "firebase/auth";
import Firebase from "../../Service/Firebase";

export class AkunScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      newPassword: "",
    };
  }

  onUpdate = () => {
    let user = Auth.currentUser;
    updatePassword(user, this.state.newPassword)
      .then(() => {
        Alert.alert("Password Telah diubah");
      })
      .catch((error) => {
        Alert.alert(error.code, error.message);
      });
  };

  onChangeUpdate = () => {
    if (!this.state.password || !this.state.newPassword) {
      Alert.alert("Mohon isi data");
    } else if (this.state.password != this.state.newPassword) {
      Alert.alert("Mohon isi data dengan sesuai");
    } else {
      Alert.alert("Konfirmasi", "Yakin Anda mau ubah sandi", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "ya", onPress: () => this.onUpdate() },
      ]);
    }
  };

  render() {
    return (
      <Box w={"100%"} h={"100%"}>
        <Center mt={"10%"}>
          <Heading>Email: {Auth.currentUser.email}</Heading>
          <Box>
            <VStack>
              <Input
                variant="underlined"
                placeholder="new Password"
                w={300}
                my={2}
                onChangeText={(e) => {
                  this.setState({ password: e });
                }}
              />
              <Input
                variant="underlined"
                placeholder="Confirm Password"
                w={300}
                my={2}
                onChangeText={(e) => {
                  this.setState({ newPassword: e });
                }}
              />
              <Button onPress={this.onChangeUpdate} mt={5}>
                Reset
              </Button>
            </VStack>
          </Box>
        </Center>
      </Box>
    );
  }
}

export default AkunScreen;

// const AkunScreen = () => {
//   const user = Auth.currentUser;
//   const [password, setPassword] = useState();
//   const [newPassword, setNewPassword] = useState();

//   HandleUpdate = () => {
//     if (password != newPassword) {
//       Alert.alert("Mohon samakan data");
//       console.log("tidak sama");
//     } else if (!password || !newPassword) {
//       Alert.alert("Mohon Masukan data dengan benar dan lengkap");
//       console.log("salah");
//     } else {
//       Alert.alert("Apakah Anda yakin mau ubah sandi", [
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//         {
//           text: "OK",
//           onPress: () => Firebase.UpdatePassword(newPassword),
//         },
//       ]);
//     }
//   };

//   return (
//     <Box w={"100%"} h={"100%"}>
//       <Center mt={"10%"}>
//         <Heading>Email: {user?.email}</Heading>
//         <Box>
//           <VStack>
//             <Input
//               variant="underlined"
//               placeholder="Password"
//               value={password}
//               onChangeText={(e) => setPassword(e)}
//               w={300}
//             />
//             <Input
//               variant="underlined"
//               placeholder="Basword kedua"
//               value={newPassword}
//               onChangeText={(e) => setNewPassword(e)}
//               w={300}
//             />
//             <Button onPress={HandleUpdate}>Reset</Button>
//           </VStack>
//         </Box>
//       </Center>
//     </Box>
//   );
// };

// export default AkunScreen;

// const styles = StyleSheet.create({});
