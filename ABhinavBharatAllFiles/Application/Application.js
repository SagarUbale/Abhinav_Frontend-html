



        document.getElementById('dob').addEventListener('change', function () {
            const dob = new Date(this.value);
            const referenceDate = new Date('2024-08-31');

            if (dob) {
                let age = referenceDate.getFullYear() - dob.getFullYear();
                const monthDiff = referenceDate.getMonth() - dob.getMonth();
                const dayDiff = referenceDate.getDate() - dob.getDate();

                if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                    age--; // Adjust age if the birthdate hasn't occurred yet this year
                }

                document.getElementById('age').value = age;
            } else {
                document.getElementById('age').value = '';
            }
        });
    