export function salonLocationDataSet(data) {
  let salonLocations = data?.map((salon, id) => {
    return {
      id: id?.toString(),
      uuid: salon?.uuid,
      name: salon?.name,
      title: `${salon?.address?.address}, ${salon?.address?.state}, ${salon?.address?.city} ${salon?.address?.postCode}`,
      latitude: salon?.address?.latitude,
      longitude: salon?.address?.longitude,
      status: salon?.status?.name,
    };
  });
  return salonLocations;
}

export function salonDetails(data) {
  return data?.map((salon, id) => {
    return {
      uuid: id,
      name: salon?.name,
      location: salon?.address?.address,
      timing: {
        fromTime: salon?.fromTime,
        toTime: salon?.toTime,
        fromDay: salon?.fromDay,
        toDay: salon?.toDay,
      },
      owner_name: salon?.address?.firstName + " " + salon?.address?.lastName,
      owner_image:
        "https://storage.googleapis.com/soinskarisma-salon-images/salon-owners/Salon%20Owner%20Mascouche.jpg",
      owner_review:
        "Manager and salon owner on Mascouche, Yvena has more than 15 years of experience in the beauty industry. Yvena loves to welcome her clients and listen to their needs in order to train her team with the best possible techniques. She takes care of every detail so that each client spends a unique moment in the salon." +
        " Soins Karismä Par Téquila & Rhum offers you an experience full of novelty, pleasure, and purity. Check the complete list of our services using your Dashboard.",
      media: salon?.salonImages,
      salons_description: salon?.describeSalon,
      rating: salon?.rating,
      total_reviews: "30",
    };
  });
}
