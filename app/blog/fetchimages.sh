gcloud storage ls --recursive gs://tubememo-public/rewritemate/ \
  | grep -v '/$' \
  | sed 's|.*/||' \
  > /Users/tbp/Documents/RewriteMate/rewritemateapp/app/blog/images.txt