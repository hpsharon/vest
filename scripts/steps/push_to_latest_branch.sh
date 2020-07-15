git config --global user.email $EMAIL_ADDRESS --replace-all
git config --global user.name $GIT_NAME

echo "Deleting local stable branch"
git branch -D $STABLE_BRANCH

echo "Checking out new local stable branch"
git checkout -b $STABLE_BRANCH

echo "Commiting"
git add .
git commit -m "$1" -m "$2"

echo "Pushing to $STABLE_BRANCH"
git push https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git $STABLE_BRANCH

echo "Deleting local latest branch ($LATEST_BRANCH)"
git branch -D $LATEST_BRANCH

echo "Checking out new local latest branch"
git checkout -b $LATEST_BRANCH

echo "Trying to update latest branch"
git push https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git $LATEST_BRANCH

echo "Cloning gh-pages"
git clone --single-branch --branch gh-pages https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git _docs

echo "Copying docs directory"

cp -R docs/. _docs
cd _docs

echo "Committing docs"
git add .
git commit -m "$1"

echo "Pushing docs directory"
git push https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git gh-pages

cd../
rm -rf _docs