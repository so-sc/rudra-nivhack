
from google.cloud import storage, aiplatform
from typing import Optional, List

def uploadToBucket(bname, file, name):
    """
    @param:
    bname: Name of storage blog
    file: file path
    name: Name of bucket
    """
    storage_client = storage.Client.from_service_account_json('creds.json')
    bucket = storage_client.get_bucket(name)
    blob = bucket.blob(bname)
    blob.upload_from_filename(file)
    return blob.public_url



def datasetGCS(name: str, project: str, location: str, data: Optional[str]):
    """
    @param:
    name: Name for dataset
    project: Project name 
    location: Server
    data: CSV file
    """

    aiplatform.init(project=project, location=location)

    dataset = aiplatform.TimeSeriesDataset.create(
        display_name=name,
        gcs_source=data,
    )

    dataset.wait()

    print(f'\tDataset: "{dataset.display_name}"')
    print(f'\tname: "{dataset.resource_name}"')

def trainingForcasting(
    project: str,
    display_name: str,
    dataset_id: str,
    location: str = "us-central1",
    model_display_name: str = "my_model",
    target_column: str = "target_column",
    time_column: str = "date",
    time_series_identifier_column: str = "time_series_id",
    unavailable_at_forecast_columns: List[str] = [],
    available_at_forecast_columns: List[str] = [],
    forecast_horizon: int = 1,
    data_granularity_unit: str = "week",
    data_granularity_count: int = 1,
    training_fraction_split: float = 0.8,
    validation_fraction_split: float = 0.1,
    test_fraction_split: float = 0.1,
    budget_milli_node_hours: int = 8000,
    timestamp_split_column_name: str = "timestamp_split",
    weight_column: str = "weight",
    time_series_attribute_columns: List[str] = [],
    context_window: int = 0,
    export_evaluated_data_items: bool = False,
    export_evaluated_data_items_bigquery_destination_uri: Optional[str] = None,
    export_evaluated_data_items_override_destination: bool = False,
    quantiles: Optional[List[float]] = None,
    validation_options: Optional[str] = None,
    predefined_split_column_name: Optional[str] = None,
    sync: bool = True,
):
    aiplatform.init(project=project, location=location)

    # Create training job
    forecasting_tide_job = aiplatform.TimeSeriesDenseEncoderForecastingTrainingJob(
        display_name=display_name,
        optimization_objective="minimize-rmse",
    )

    # Retrieve existing dataset
    dataset = aiplatform.TimeSeriesDataset(dataset_id)

    # Run training job
    model = forecasting_tide_job.run(
        dataset=dataset,
        target_column=target_column,
        time_column=time_column,
        time_series_identifier_column=time_series_identifier_column,
        unavailable_at_forecast_columns=unavailable_at_forecast_columns,
        available_at_forecast_columns=available_at_forecast_columns,
        forecast_horizon=forecast_horizon,
        data_granularity_unit=data_granularity_unit,
        data_granularity_count=data_granularity_count,
        training_fraction_split=training_fraction_split,
        validation_fraction_split=validation_fraction_split,
        test_fraction_split=test_fraction_split,
        predefined_split_column_name=predefined_split_column_name,
        timestamp_split_column_name=timestamp_split_column_name,
        weight_column=weight_column,
        time_series_attribute_columns=time_series_attribute_columns,
        context_window=context_window,
        export_evaluated_data_items=export_evaluated_data_items,
        export_evaluated_data_items_bigquery_destination_uri=export_evaluated_data_items_bigquery_destination_uri,
        export_evaluated_data_items_override_destination=export_evaluated_data_items_override_destination,
        quantiles=quantiles,
        validation_options=validation_options,
        budget_milli_node_hours=budget_milli_node_hours,
        model_display_name=model_display_name,
        sync=sync,
    )

    model.wait()

    # print(model.display_name)
    # print(model.resource_name)
    # print(model.uri)
    return model


