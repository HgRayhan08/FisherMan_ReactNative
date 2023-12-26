import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Box, FlatList, Heading, Text } from "native-base";

const AboutScreen = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <ScrollView>
            <Box>
              <Box mx={5} mt={5}>
                <Heading mb={3}>Deskripsi Aplikasi</Heading>
                <Text fontSize={"md"} textAlign={"justify"}>
                  Fisher Man merupakan aplikasi berbasis android yang dibuat
                  yang utamanya para nelayan di seluruh penjuru Indonesia.
                  Aplikasi ini ditujukan sebagai motor penggerak transformasi
                  budaya nelayan dari “mencari ikan” menjadi “menangkap ikan”
                  melalui pemanfaatan teknologi informasi. Beragam informasi
                  disajikan secara sederhana untuk membantu nelayan sehingga
                  kegiatan penangkapan ikan dapat dilakukan secara efektif,
                  efisien, dan aman. Hanya dalam satu genggaman aplikasi,
                  nelayan dapat merencanakan kegiatan penangkapan ikan dengan
                  lebih baik, mulai menentukan secara mandiri lokasi penangkapan
                  ikan terdekat, estimasi kebutuhan BBM, estimasi harga jual,
                  dengan tetap mempertimbangkan kondisi cuaca dan gelombang saat
                  bekerja di laut.
                </Text>
              </Box>
              <Box mx={5} mt={2}>
                <Heading mt={3}>Tim Developer</Heading>
                <Box ml={10}>
                  <Text>Bayu Kevin Farinda</Text>
                  <Text>Dina Avifah</Text>
                  <Text>Hugo Rayhan Firmansyah</Text>
                  <Text>Nabila Syifa Rachmadini</Text>
                  <Text>Natania Fadilah</Text>
                  <Text>Rafael Fillah Firmansyah</Text>
                </Box>
              </Box>
              <Box mx={5} mt={2}>
                <Heading mt={3}>Rujukan API</Heading>
                <Text>Api Cuaca = https://openweathermap.org/</Text>
                <Text>DataBase = https://firebase.google.com/</Text>
              </Box>
            </Box>
          </ScrollView>
        }
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
