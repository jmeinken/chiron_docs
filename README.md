This documentation is generated using sphinx. The documentation source files are in the private Chiron repository.

## How to build docs from the source files

### 1. clone a copy of this output repository into the location of your choice 

```
git clone https://github.com/jmeinken/chiron_docs.git
```

- It should already be on the correct branch `gh-pages`
    
    
### 2. Go to the source directory and build the docs to output repository

```
cd chiron/docs

# provide the path to the output repository you cloned in step 1
sphinx-build -b html . ../../chiron_docs

```

### 3. Check if it built correctly by opening index.html in the output repository

### 4. You can save changes to this output repository back to GitHub

```
cd ../../chiron_docs
git add . -A
git commit -m "updated documentation"
git push origin gh-pages
```
