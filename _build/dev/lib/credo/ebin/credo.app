{application,credo,
             [{description,"A static code analysis tool for the Elixir language with a focus on code consistency and teaching."},
              {modules,['Elixir.Credo','Elixir.Credo.CLI',
                        'Elixir.Credo.CLI.Command',
                        'Elixir.Credo.CLI.Command.Categories',
                        'Elixir.Credo.CLI.Command.Explain',
                        'Elixir.Credo.CLI.Command.GenCheck',
                        'Elixir.Credo.CLI.Command.GenCheck.MacroPort',
                        'Elixir.Credo.CLI.Command.GenConfig',
                        'Elixir.Credo.CLI.Command.Help',
                        'Elixir.Credo.CLI.Command.List',
                        'Elixir.Credo.CLI.Command.Suggest',
                        'Elixir.Credo.CLI.Command.Version',
                        'Elixir.Credo.CLI.Filename','Elixir.Credo.CLI.Filter',
                        'Elixir.Credo.CLI.Output',
                        'Elixir.Credo.CLI.Output.Categories',
                        'Elixir.Credo.CLI.Output.Explain',
                        'Elixir.Credo.CLI.Output.IssueHelper',
                        'Elixir.Credo.CLI.Output.IssuesByScope',
                        'Elixir.Credo.CLI.Output.IssuesGroupedByCategory',
                        'Elixir.Credo.CLI.Output.IssuesShortList',
                        'Elixir.Credo.CLI.Output.Summary',
                        'Elixir.Credo.CLI.Output.UI',
                        'Elixir.Credo.CLI.Sorter','Elixir.Credo.Check',
                        'Elixir.Credo.Check.CodeHelper',
                        'Elixir.Credo.Check.CodePattern',
                        'Elixir.Credo.Check.Consistency.ExceptionNames',
                        'Elixir.Credo.Check.Consistency.ExceptionNames.PrefixAndSuffixCollector',
                        'Elixir.Credo.Check.Consistency.Helper',
                        'Elixir.Credo.Check.Consistency.LineEndings',
                        'Elixir.Credo.Check.Consistency.LineEndings.Unix',
                        'Elixir.Credo.Check.Consistency.LineEndings.Windows',
                        'Elixir.Credo.Check.Consistency.ParameterPatternMatching',
                        'Elixir.Credo.Check.Consistency.ParameterPatternMatching.PositionCollector',
                        'Elixir.Credo.Check.Consistency.SpaceAroundOperators',
                        'Elixir.Credo.Check.Consistency.SpaceAroundOperators.SpaceHelper',
                        'Elixir.Credo.Check.Consistency.SpaceAroundOperators.WithSpace',
                        'Elixir.Credo.Check.Consistency.SpaceAroundOperators.WithoutSpace',
                        'Elixir.Credo.Check.Consistency.SpaceInParentheses',
                        'Elixir.Credo.Check.Consistency.SpaceInParentheses.WithSpace',
                        'Elixir.Credo.Check.Consistency.SpaceInParentheses.WithoutSpace',
                        'Elixir.Credo.Check.Consistency.TabsOrSpaces',
                        'Elixir.Credo.Check.Consistency.TabsOrSpaces.Spaces',
                        'Elixir.Credo.Check.Consistency.TabsOrSpaces.Tabs',
                        'Elixir.Credo.Check.Design.AliasUsage',
                        'Elixir.Credo.Check.Design.DuplicatedCode',
                        'Elixir.Credo.Check.Design.TagFIXME',
                        'Elixir.Credo.Check.Design.TagHelper',
                        'Elixir.Credo.Check.Design.TagTODO',
                        'Elixir.Credo.Check.FindLintAttributes',
                        'Elixir.Credo.Check.LintAttribute',
                        'Elixir.Credo.Check.Params',
                        'Elixir.Credo.Check.PropertyValue',
                        'Elixir.Credo.Check.Readability.FunctionNames',
                        'Elixir.Credo.Check.Readability.LargeNumbers',
                        'Elixir.Credo.Check.Readability.MaxLineLength',
                        'Elixir.Credo.Check.Readability.ModuleAttributeNames',
                        'Elixir.Credo.Check.Readability.ModuleDoc',
                        'Elixir.Credo.Check.Readability.ModuleNames',
                        'Elixir.Credo.Check.Readability.NoParenthesesWhenZeroArity',
                        'Elixir.Credo.Check.Readability.ParenthesesInCondition',
                        'Elixir.Credo.Check.Readability.PredicateFunctionNames',
                        'Elixir.Credo.Check.Readability.RedundantBlankLines',
                        'Elixir.Credo.Check.Readability.TrailingBlankLine',
                        'Elixir.Credo.Check.Readability.TrailingWhiteSpace',
                        'Elixir.Credo.Check.Readability.VariableNames',
                        'Elixir.Credo.Check.Refactor.ABCSize',
                        'Elixir.Credo.Check.Refactor.CaseTrivialMatches',
                        'Elixir.Credo.Check.Refactor.CondStatements',
                        'Elixir.Credo.Check.Refactor.CyclomaticComplexity',
                        'Elixir.Credo.Check.Refactor.FunctionArity',
                        'Elixir.Credo.Check.Refactor.Helper',
                        'Elixir.Credo.Check.Refactor.MatchInCondition',
                        'Elixir.Credo.Check.Refactor.NegatedConditionsInUnless',
                        'Elixir.Credo.Check.Refactor.NegatedConditionsWithElse',
                        'Elixir.Credo.Check.Refactor.Nesting',
                        'Elixir.Credo.Check.Refactor.PerceivedComplexity',
                        'Elixir.Credo.Check.Refactor.PipeChainStart',
                        'Elixir.Credo.Check.Refactor.UnlessWithElse',
                        'Elixir.Credo.Check.Runner',
                        'Elixir.Credo.Check.Warning.BoolOperationOnSameValues',
                        'Elixir.Credo.Check.Warning.IExPry',
                        'Elixir.Credo.Check.Warning.IoInspect',
                        'Elixir.Credo.Check.Warning.NameRedeclarationByAssignment',
                        'Elixir.Credo.Check.Warning.NameRedeclarationByCase',
                        'Elixir.Credo.Check.Warning.NameRedeclarationByDef',
                        'Elixir.Credo.Check.Warning.NameRedeclarationByFn',
                        'Elixir.Credo.Check.Warning.OperationOnSameValues',
                        'Elixir.Credo.Check.Warning.OperationWithConstantResult',
                        'Elixir.Credo.Check.Warning.UnusedEnumOperation',
                        'Elixir.Credo.Check.Warning.UnusedFileOperation',
                        'Elixir.Credo.Check.Warning.UnusedFunctionReturnHelper',
                        'Elixir.Credo.Check.Warning.UnusedKeywordOperation',
                        'Elixir.Credo.Check.Warning.UnusedListOperation',
                        'Elixir.Credo.Check.Warning.UnusedPathOperation',
                        'Elixir.Credo.Check.Warning.UnusedRegexOperation',
                        'Elixir.Credo.Check.Warning.UnusedStringOperation',
                        'Elixir.Credo.Check.Warning.UnusedTupleOperation',
                        'Elixir.Credo.CheckForUpdates','Elixir.Credo.Code',
                        'Elixir.Credo.Code.Block','Elixir.Credo.Code.Module',
                        'Elixir.Credo.Code.Name',
                        'Elixir.Credo.Code.Parameters',
                        'Elixir.Credo.Code.ParserError',
                        'Elixir.Credo.Code.Scope','Elixir.Credo.Code.Sigils',
                        'Elixir.Credo.Code.Strings','Elixir.Credo.Config',
                        'Elixir.Credo.ExsLoader','Elixir.Credo.Issue',
                        'Elixir.Credo.IssueMeta','Elixir.Credo.Priority',
                        'Elixir.Credo.Service.SourceFileCodeOnly',
                        'Elixir.Credo.Service.SourceFileIssues',
                        'Elixir.Credo.Service.SourceFileScopes',
                        'Elixir.Credo.Service.SourceFileWithoutStringAndSigils',
                        'Elixir.Credo.Severity','Elixir.Credo.SourceFile',
                        'Elixir.Credo.Sources','Elixir.Mix.Tasks.Credo',
                        'Elixir.Mix.Tasks.Credo.Gen.Check',
                        'Elixir.Mix.Tasks.Credo.Gen.Config']},
              {registered,[]},
              {vsn,"0.5.3"},
              {mod,{'Elixir.Credo',[]}},
              {applications,[kernel,stdlib,elixir,bunt,logger,inets]}]}.
