import React from "react";
import { Box, FlatList, Heading, Text } from "native-base";
import { KebijakanPrivasi } from "../../Data/data";
import { View, ScrollView } from "react-native";

const Privasi = () => {
  const kebijakan = ({ item }) => {
    return (
      <Box>
        <Heading size={"sm"} mt={3}>
          {item.id}. {item.title}
        </Heading>
        <Text textAlign={"justify"} fontSize={"md"}>
          {item.deskripsi}
        </Text>
      </Box>
    );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <ScrollView>
            <Box mb={5}>
              <Text textAlign={"justify"} fontSize={"md"} px={5} pt={4}>
                Kebijakan Privasi berikut ini menjelaskan bagaimana kami
                mengumpulkan, menggunakan, memindahkan, mengungkapkan dan
                melindungi informasi pribadi anda yang dapat diidentifikasi yang
                diperoleh melalui Aplikasi kami (sebagaimana didefinisikan di
                bawah). Mohon anda membaca Kebijakan Privasi ini dengan seksama
                untuk memastikan bahwa anda memahami bagaimana ketentuan
                Kebijakan Privasi ini kami berlakukan. Kebijakan Privasi ini
                disertakan sebagai bagian dari Ketentuan Penggunaan kami.
                Kebijakan Privasi ini mencakup hal-hal sebagai berikut :
              </Text>
              <Box ml={9} mt={2}>
                <Text fontSize={"md"}>1. Definisi</Text>
                <Text fontSize={"md"}>2. Informasi yang kami kumpulkan</Text>
                <Text fontSize={"md"}>
                  3. Penggunaan informasi yang kami kumpulkan
                </Text>
                <Text fontSize={"md"}>
                  4. Pemberian informasi yang kami kumpulkan
                </Text>
                <Text fontSize={"md"}>
                  5. Penahanan informasi yang kami kumpulkan
                </Text>
                <Text fontSize={"md"}>6. Keamanan</Text>
                <Text fontSize={"md"}>
                  7. Perubahan atas Kebijakan Privasi ini
                </Text>
                <Text fontSize={"md"}>8. Pengakuan dan persetujuan</Text>
                <Text fontSize={"md"}>9. Cara menghubungi kami</Text>
              </Box>
              <Text textAlign={"justify"} fontSize={"md"} px={5} pt={2}>
                Penggunaan anda atas aplikasi dan layanan kami tunduk pada
                Ketentuan Penggunaan dan Kebijakan Privasi ini dan
                mengindikasikan persetujuan anda terhadap Ketentuan Penggunaan
                dan Kebijakan Privasi tersebut.
              </Text>
              <FlatList data={KebijakanPrivasi} renderItem={kebijakan} mx={5} />
            </Box>
          </ScrollView>
        }
      />
    </View>
  );
};

export default Privasi;
