This showcases the potential to define and execute **transforms**

This capability is still in early development.

Transforms are defined in the file [transforms.yaml](transforms.yaml) in the form:

```yaml
  - id: inline-transform
    description: A transform's code can also be defined inside the transform's object
    type: jq
    code: |
      .explanation = "for example - adding an element to define an implicit type"
      .type = "ex:Foo"
```

Current transform types supported are:

- **jq** 
- **sparql-update**
- **sparql-construct**
- **xslt**

Depending on the language of the example all available transforms will be executed and visible via the **transform results** button in the **examples tab**.

## Future planned functionality

### Pluggable transformation engines

Ability to define a custom transformer in a specific repository

### Post transform validation 

Ability to define target profiles to validate post-transform results

### FAIR transforms

standardisation of publication of transformation specifications

### Improved user experience

TBD

### Inheritance of sub-schema transformations

Ability to create a transformation for a composite using multiple transformable building block dependencies.

