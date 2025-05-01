Get-ChildItem -Path src\components -Filter *.html -Recurse |
  ForEach-Object {
    (Get-Content $_.FullName) -replace '\.\./assets/','assets/' |
      Set-Content $_.FullName
  }
