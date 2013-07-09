(set globallispy  1234)

(Tinytest.add "Lispyscript - Lispyscript works"
  (function (api)
    (api.isTrue true)))

(when true
  (Tinytest.add "Lispyscript - Core macros work."
    (function (api)
      (api.isTrue true))))
