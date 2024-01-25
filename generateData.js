const fs = require('fs');

const generateData = () => {
  const data = [];
  const genderChoice = ['Male', 'Female'];
  const birthdayMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const regions = ['United States', 'Europe', 'APAC', 'Latin America'];

  for (let i = 1; i <= 1000; i++) {
    const gender = genderChoice[Math.floor(Math.random() * 2)];
    const birthMonth = birthdayMonths[Math.floor(Math.random() * 12)];
    const spend = Math.floor(Math.random() * 5000);
    const region = regions[Math.floor(Math.random() * 4)];
    data.push({
      id: i,
      birthday: birthMonth,
      spend: spend,
      region: region,
      gender: gender,
    });
  }

  fs.writeFileSync('userData.json', JSON.stringify(data, null, 2));
};

generateData();
