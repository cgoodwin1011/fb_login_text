git add .
read -p "commit description: " desc
git commit -m "$desc"
git pull
git push origin master
