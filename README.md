1. Create folder project on local computer

2. Create new repo in Github

3. Setup GIT
git init
git remote add origin https://github.com/DuciHua/folder-name.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main

-> if error:
git pull origin main --allow-unrelated-histories
git push -u origin main


4. Clone repo
git clone https://github.com/DuciHua/folder-name.git
cd ui-starter-template
npm install
code .

5. Push code
git add .
git commit -m "Description goes here"
git push

6. Pull code
git pull

7. Active prettier
npm install -D prettier prettier-plugin-tailwindcss

(create .prettierrc then paste:
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
)

‣畤楣畨੡